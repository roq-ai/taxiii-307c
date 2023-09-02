interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Admin Staff'],
  tenantName: 'Company',
  applicationName: 'taxiii',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage account',
    'Update profile information',
    'Book a cab',
    'View cab booking status and history',
  ],
  ownerAbilities: [
    'Manage company registration',
    'Manage admin staff',
    "Edit company's information",
    "Deactivate company's account",
  ],
};
