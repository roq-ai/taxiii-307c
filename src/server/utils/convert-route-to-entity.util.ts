const mapping: Record<string, string> = {
  'admin-staffs': 'admin_staff',
  bookings: 'booking',
  cabs: 'cab',
  companies: 'company',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
