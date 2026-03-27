// Mock data for Praisly Hair salon dashboard

export const revenueData = [
  { day: 'Mar 1', revenue: 1240 },
  { day: 'Mar 2', revenue: 980 },
  { day: 'Mar 3', revenue: 1560 },
  { day: 'Mar 4', revenue: 1380 },
  { day: 'Mar 5', revenue: 890 },
  { day: 'Mar 6', revenue: 1720 },
  { day: 'Mar 7', revenue: 1890 },
  { day: 'Mar 8', revenue: 1450 },
  { day: 'Mar 9', revenue: 1100 },
  { day: 'Mar 10', revenue: 1670 },
  { day: 'Mar 11', revenue: 1340 },
  { day: 'Mar 12', revenue: 1580 },
  { day: 'Mar 13', revenue: 920 },
  { day: 'Mar 14', revenue: 1760 },
  { day: 'Mar 15', revenue: 2010 },
  { day: 'Mar 16', revenue: 1430 },
  { day: 'Mar 17', revenue: 1290 },
  { day: 'Mar 18', revenue: 1850 },
  { day: 'Mar 19', revenue: 1620 },
  { day: 'Mar 20', revenue: 1180 },
  { day: 'Mar 21', revenue: 1940 },
  { day: 'Mar 22', revenue: 2130 },
  { day: 'Mar 23', revenue: 1550 },
  { day: 'Mar 24', revenue: 1370 },
  { day: 'Mar 25', revenue: 1890 },
  { day: 'Mar 26', revenue: 1710 },
  { day: 'Mar 27', revenue: 1480 },
]

export const sparkRevenue = [980, 1560, 1380, 1720, 1890, 1450, 1670]
export const sparkClients = [12, 18, 14, 22, 19, 16, 21]
export const sparkAppointments = [8, 11, 9, 14, 12, 10, 13]
export const sparkRating = [4.6, 4.8, 4.7, 4.9, 4.8, 4.7, 4.9]

export const metrics = {
  todayRevenue: 1480,
  weekRevenue: 10870,
  monthRevenue: 41220,
  appointmentsToday: 12,
  newClientsMonth: 23,
  totalClients: 847,
  retentionRate: 89,
  avgRating: 4.8,
}

export const appointments = [
  { id: 1, time: '09:00', client: 'Sofia M.', service: 'Balayage', stylist: 'Mia Chen', status: 'completed', duration: 120 },
  { id: 2, time: '09:30', client: 'Emma R.', service: 'Blowout', stylist: 'Jake Torres', status: 'completed', duration: 45 },
  { id: 3, time: '10:00', client: 'Ava K.', service: 'Cut & Style', stylist: 'Nina Park', status: 'completed', duration: 60 },
  { id: 4, time: '11:00', client: 'Luna W.', service: 'Color Touch-Up', stylist: 'Mia Chen', status: 'in-progress', duration: 90 },
  { id: 5, time: '11:30', client: 'Iris P.', service: 'Keratin Treatment', stylist: 'Sam Ortiz', status: 'in-progress', duration: 150 },
  { id: 6, time: '13:00', client: 'Zara L.', service: 'Highlights', stylist: 'Jake Torres', status: 'upcoming', duration: 120 },
  { id: 7, time: '14:00', client: 'Noor A.', service: 'Cut & Style', stylist: 'Nina Park', status: 'upcoming', duration: 60 },
  { id: 8, time: '14:30', client: 'Chloe D.', service: 'Deep Conditioning', stylist: 'Mia Chen', status: 'upcoming', duration: 45 },
  { id: 9, time: '15:30', client: 'Ella F.', service: 'Balayage', stylist: 'Sam Ortiz', status: 'upcoming', duration: 120 },
  { id: 10, time: '16:00', client: 'Maya B.', service: 'Blowout', stylist: 'Jake Torres', status: 'upcoming', duration: 45 },
  { id: 11, time: '17:00', client: 'Jade H.', service: 'Cut & Color', stylist: 'Nina Park', status: 'upcoming', duration: 90 },
  { id: 12, time: '17:30', client: 'Ruby T.', service: 'Trim', stylist: 'Mia Chen', status: 'upcoming', duration: 30 },
]

export const staff = [
  { name: 'Mia Chen', role: 'Senior Stylist', utilization: 92, appointmentsToday: 4, revenue: 580 },
  { name: 'Jake Torres', role: 'Colorist', utilization: 78, appointmentsToday: 3, revenue: 420 },
  { name: 'Nina Park', role: 'Stylist', utilization: 85, appointmentsToday: 3, revenue: 340 },
  { name: 'Sam Ortiz', role: 'Senior Stylist', utilization: 70, appointmentsToday: 2, revenue: 290 },
]

export const services = [
  { name: 'Cut & Style', bookings: 156, revenue: 9360, percentage: 28 },
  { name: 'Balayage', bookings: 89, revenue: 15130, percentage: 22 },
  { name: 'Color Touch-Up', bookings: 78, revenue: 6240, percentage: 18 },
  { name: 'Blowout', bookings: 67, revenue: 2680, percentage: 14 },
  { name: 'Highlights', bookings: 45, revenue: 7650, percentage: 10 },
  { name: 'Keratin Treatment', bookings: 23, revenue: 4600, percentage: 5 },
  { name: 'Deep Conditioning', bookings: 18, revenue: 900, percentage: 2 },
  { name: 'Trim', bookings: 12, revenue: 360, percentage: 1 },
]

export const reviews = [
  { client: 'Sofia M.', rating: 5, text: 'Mia is absolutely incredible. Best balayage I\'ve ever had.', date: 'Mar 27' },
  { client: 'Zara L.', rating: 5, text: 'Love this place. Always leave feeling amazing.', date: 'Mar 26' },
  { client: 'Emma R.', rating: 4, text: 'Great blowout, a bit of a wait but worth it.', date: 'Mar 25' },
  { client: 'Luna W.', rating: 5, text: 'The color matching is perfect every single time.', date: 'Mar 24' },
  { client: 'Ava K.', rating: 5, text: 'Nina always knows exactly what I want.', date: 'Mar 23' },
]

// 7-day staff utilization sparklines
export const sparkStaffUtilization: Record<string, number[]> = {
  'Mia Chen': [88, 90, 95, 87, 92, 90, 92],
  'Jake Torres': [72, 80, 75, 82, 76, 80, 78],
  'Nina Park': [80, 82, 88, 84, 86, 82, 85],
  'Sam Ortiz': [65, 72, 68, 74, 70, 66, 70],
}

// 7-day service booking sparklines
export const sparkServices: Record<string, number[]> = {
  'Cut & Style': [22, 25, 18, 24, 20, 26, 21],
  'Balayage': [12, 14, 10, 13, 15, 11, 14],
  'Color Touch-Up': [10, 12, 11, 9, 13, 10, 13],
  'Blowout': [8, 10, 9, 11, 8, 10, 11],
  'Highlights': [6, 7, 5, 8, 6, 7, 6],
  'Keratin Treatment': [3, 4, 2, 4, 3, 3, 4],
  'Deep Conditioning': [2, 3, 2, 3, 2, 3, 3],
  'Trim': [1, 2, 1, 2, 2, 1, 3],
}

// Computed from appointments (replaces hardcoded donut in Pulse)
export function getAppointmentStatusCounts() {
  const completed = appointments.filter(a => a.status === 'completed').length
  const inProgress = appointments.filter(a => a.status === 'in-progress').length
  const upcoming = appointments.filter(a => a.status === 'upcoming').length
  return [
    { name: 'Completed', value: completed },
    { name: 'Active', value: inProgress },
    { name: 'Upcoming', value: upcoming },
  ]
}

// Service revenue shares for ring/donut charts
export const serviceRevenueShare = services.map(s => ({
  name: s.name,
  value: s.revenue,
}))

// Week comparison
export const weekComparison = {
  thisWeek: 10870,
  lastWeek: 9720,
  changePercent: 11.8,
}

// Hourly revenue (for Void template)
export const hourlyRevenue = [
  { hour: '9am', revenue: 180 },
  { hour: '10am', revenue: 240 },
  { hour: '11am', revenue: 320 },
  { hour: '12pm', revenue: 160 },
  { hour: '1pm', revenue: 280 },
  { hour: '2pm', revenue: 220 },
  { hour: '3pm', revenue: 190 },
  { hour: '4pm', revenue: 140 },
  { hour: '5pm', revenue: 110 },
]
