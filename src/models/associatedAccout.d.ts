interface IAssociatedAccount {
  /** The reference to the account that has an access to the object on the collection */
  accountId: string

  /** The access right to change access rights */
  changeAccessRights: boolean

  /** The access right to overwrite data */
  overwrite: boolean

  /** The access right to read data */
  read: boolean

  /** The access right to write data */
  write: boolean
}
