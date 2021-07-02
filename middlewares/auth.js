import catchAsyncErrors from './catchAsyncErrors'
import { getSession } from 'next-auth/client'
import ErrorHandler from '../utils/ErrorHandler';

//* Getting the authenticated user data
const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {

    const session = await getSession({ req })


    //which means the user is not logged in
    if (!session) {
        return next(new ErrorHandler("Login first to access this resource", 401))
    }

    req.user = session.user

    next()
})

export {
    isAuthenticatedUser
}