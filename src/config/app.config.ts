interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Inventory Manager'],
  customerRoles: ['End User'],
  tenantRoles: ['Owner', 'Inventory Manager', 'IT Administrator', 'Finance Manager'],
  tenantName: 'Company',
  applicationName: 'laptop inventory management app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read user information',
    'Read company information',
    'Read laptop information',
    'Read transaction information',
  ],
  ownerAbilities: [
    'Manage inventory',
    'Manage transactions',
    'Manage laptop information',
    'Manage company information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/450a5978-a980-499f-9cd5-48bd62e1ae5b',
};
