import type { AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../payload-types'

type isAdmin = (args: AccessArgs<unknown, User>) => boolean
// This function checks if the user is an admin
// It uses the checkRole function to check if the user has the role 'admin'
// If the user has the role 'admin', it returns true
// If the user does not have the role 'admin', it returns false
// This function is used in the access property of the admin collection



export const admins: isAdmin = ({ req: { user } }) => {
  return checkRole(['admin'], user)
}
