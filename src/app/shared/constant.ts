export const chamberNameConfigs = {
  type: 'name',
  minLength: '', // TODO: TBD
  maxLength: '', // TODO: TBD
  pattern: /(?=^[a-zA-Z])(?=^[\w\s-]+$)/,
  patternMismatchMessage: 'One or more characters entered are not allowed.',
  // eslint-disable-next-line no-empty-character-class
  trailingSpacePattern: /[ ]+$/,
  trailingSpacesErrorMessg: 'No trailing spaces allowed.',
};

export interface ValidationData {
  /**
   * hasError
   */
  hasError: boolean;

  /**
   * validationMessage
   */
  validationMessage: string;
}

export const VALID = 'VALID';
export const INVALID = 'INVALID';
export const FILED_REQUIRED = '* required';
export const userListDisplayedColumns = [
  'email',
  'userName',
  'name',
  'password',
];

export interface ProfileOptions {
  id: number;
  name: string;
}

export const profileMenuOptions = [
  {
    id: 1,
    name: 'Profile',
  },
  {
    id: 2,
    name: 'Logout',
  },
];

export const employeeHeadings = [
  'mobileNumber',
  'address',
  'city',
  'state',
  'country',
  'postalZipCode',
  'additionalInformation',
];
