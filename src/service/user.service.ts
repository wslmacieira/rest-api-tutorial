import { omit } from 'lodash'
import UserModel, { UserDocument, UserInput } from '../models/user.model'
import { FilterQuery } from 'mongoose'

export async function createUser(input: UserInput) {
  try {
    const user = await UserModel.create(input)

    return omit(user.toJSON(), 'password')
  } catch (e) {
    throw new Error(e)
  }
}

export async function findUser(query: FilterQuery<UserDocument>) {
  return UserModel.findOne(query).lean()
}