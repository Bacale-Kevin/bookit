class APIFeatures {
  constructor(mongooseQuery, queryStrFromUrl) {
    this.mongooseQuery = mongooseQuery;
    this.queryStrFromUrl = queryStrFromUrl;
  }

  //search functionality
  search() {
    const location = this.queryStrFromUrl.location
      ? {
          address: {
            $regex: this.queryStrFromUrl.location,
            $options: "i",
          },
        }
      : {};

    this.mongooseQuery = this.mongooseQuery.find({ ...location });
    return this; //the object
  }

  //filter functionality
  filter() {
    const queryCopy = { ...this.queryStrFromUrl };

    /* Remove fields from query Example in the query string:
    * api/rooms?location=New york
    our goal is to filter the location from the query string
    */
    console.log(queryCopy);
    const removeFields = ["location", "page"]; // remove query parameter thet is not part of the document
    removeFields.forEach((el) => delete queryCopy[el]);
    console.log(queryCopy);

    this.mongooseQuery = this.mongooseQuery.find(queryCopy);
    return this;
  }

  pagination(resPerPage) {
    //api/rooms?page='number_passed_as_value     if nothing given use 1
    const currentPage = Number(this.queryStrFromUrl.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    this.mongooseQuery = this.mongooseQuery.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFeatures;
