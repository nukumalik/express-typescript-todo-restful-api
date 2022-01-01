import 'dotenv/config'
import passport from 'passport'
import {ExtractJwt, Strategy, StrategyOptions} from 'passport-jwt'
import {UserModel} from '../schemas/User'
import {JWTPayload} from '../interfaces/jwt'
import {User} from '../interfaces/user'

const opt: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET_OR_KEY,
}

export const strategy = () =>
  passport.use(
    new Strategy(opt, async (payload: JWTPayload, done) => {
      try {
        const user: User = await UserModel.findById(payload?._id)
        if (!user) return done(null, false)
        return done(null, payload as JWTPayload)
      } catch (error) {
        return done(null, false)
      }
    })
  )

export const authenticate = passport.authenticate('jwt', {session: false})
