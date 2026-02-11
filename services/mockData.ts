import { User, UserRole, Turf, Booking } from '../types';

export const INITIAL_USERS: User[] = [
  {
    id: '1',
    name: 'Mr Karim',
    email: 'user@example.com',
    role: UserRole.USER,
    password: 'password123'
  },
  {
    id: '2',
    name: 'Sarah Manager',
    email: 'manager@example.com',
    role: UserRole.MANAGER,
    password: 'password123'
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@example.com',
    role: UserRole.ADMIN,
    password: 'password123'
  }
];

export const INITIAL_TURFS: Turf[] = [
  {
    id: 't1',
    name: 'Mirpur Arena Turf',
    location: 'Mirpur',
    sport: 'Football',
    pricePerHour: 1200,
    description: 'A spacious turf suitable for both 5-a-side Football and Cricket matches. Features excellent floodlights.',
    images: ['https://images.unsplash.com/photo-1529900748604-07564a03e7a6?auto=format&fit=crop&q=80&w=1000'],
    managerId: '2',
    amenities: ['Parking', 'Water', 'Gallery']
  },
  {
    id: 't2',
    name: 'Dhanmondi Sports Hub',
    location: 'Dhanmondi',
    sport: 'Football',
    pricePerHour: 1800,
    description: 'Premier training facility located in the heart of Dhanmondi. Ideal for professional training sessions.',
    images: ['https://images.unsplash.com/photo-1575361204480-aadea25d46b7?auto=format&fit=crop&q=80&w=1000'],
    managerId: '2',
    amenities: ['Locker Room', 'Showers', 'Cafe']
  },
  {
    id: 't3',
    name: 'Banani Premier Turf',
    location: 'Banani',
    sport: 'Football',
    pricePerHour: 1600,
    description: 'High-end turf with FIFA grade grass. Perfect for corporate tournaments and competitive cricket.',
    images: ['https://images.unsplash.com/photo-1551958219-acbc608c6377?auto=format&fit=crop&q=80&w=1000'],
    managerId: '2',
    amenities: ['VIP Lounge', 'Parking', 'Pro Shop']
  },
  {
    id: 't4',
    name: 'Gulshan Elite Arena',
    location: 'Gulshan',
    sport: 'Football',
    pricePerHour: 2000,
    description: 'Luxury sports arena for professional matches. Offers top-tier amenities and privacy.',
    images: ['https://images.unsplash.com/photo-1624880357913-a8539238245b?auto=format&fit=crop&q=80&w=1000'],
    managerId: '99',
    amenities: ['AC Dugouts', 'Live Screening', 'Premium Showers']
  },
  {
    id: 't5',
    name: 'Motijheel Central Turf',
    location: 'Motijheel',
    sport: 'Football',
    pricePerHour: 2000,
    description: 'Located in the business district, great for after-work cricket and football games.',
    images: ['https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&q=80&w=1000'],
    managerId: '2',
    amenities: ['Parking', 'First Aid', 'Refreshments']
  },
  {
    id: 't6',
    name: 'Shyamoli Play Zone',
    location: 'Shyamoli',
    sport: 'Football',
    pricePerHour: 1500,
    description: 'A cozy but well-maintained turf focused on youth training and casual games.',
    images: ['https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000'],
    managerId: '99',
    amenities: ['Water', 'Equipment Rental']
  },
  {
    id: 't7',
    name: 'Mohammadpur Turf Complex',
    location: 'Mohammadpur',
    sport: 'Football',
    pricePerHour: 1600,
    description: 'Large complex supporting multiple sports. Popular for local cricket leagues.',
    images: ['https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&q=80&w=1000'],
    managerId: '2',
    amenities: ['Parking', 'Prayer Room', 'Water']
  },
  {
    id: 't8',
    name: 'Uttara North Arena',
    location: 'Uttara',
    sport: 'Football',
    pricePerHour: 1600,
    description: 'Modern facility in Uttara Sector 4. Features a smooth surface ideal for fast-paced football.',
    images: ['https://images.unsplash.com/photo-1524012431247-53c4f3396ad3?auto=format&fit=crop&q=80&w=1000'],
    managerId: '2',
    amenities: ['Changing Rooms', 'Food Court', 'Wifi']
  },
  {
    id: 't9',
    name: 'Farmgate Sports Arena',
    location: 'Farmgate',
    sport: 'Football',
    pricePerHour: 1700,
    description: 'Centrally located arena accessible from all parts of the city. Great for regular training.',
    images: ['https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&q=80&w=1000'],
    managerId: '99',
    amenities: ['Water', 'Seating Area']
  },
  {
    id: 't10',
    name: 'Shahbag City Turf',
    location: 'Shahbag',
    sport: 'Football',
    pricePerHour: 1900,
    description: 'Vibrant atmosphere near the university area. Excellent for student tournaments.',
    images: ['https://images.unsplash.com/photo-1518605348399-f490b438cdd7?auto=format&fit=crop&q=80&w=1000'],
    managerId: '2',
    amenities: ['Student Discount', 'Water', 'Locker']
  }
];

// Start with empty bookings for real-world usage
export const INITIAL_BOOKINGS: Booking[] = [];