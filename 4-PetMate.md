# PetMate 🐾

**"Loving Care for Your Furry Friends"**

---

## Project Overview

PetMate is a full-stack web application connecting pet owners with trusted pet sitters. Owners can browse walker/sitter profiles, book services (walking, boarding, daycare), and track updates. Sitters can manage their services, set rates, and accept bookings. Admins oversee the platform and ensure trust and safety.

---

## Roles & Permissions

| Role          | Description                          | Key Permissions                                                   |
| ------------- | ------------------------------------ | ----------------------------------------------------------------- |
| **Pet Owner** | Users who own pets and need services | Browse sitters, book services, leave reviews, manage pet profiles |
| **Sitter**    | Service providers (Walkers/Sitters)  | Create profile, list services, view bookings, update status       |
| **Admin**     | Platform moderators                  | Manage all users, view analytics, moderate content                |

> 💡 **Note**: Users select their role during registration. Admin accounts should be seeded in the database.

---

## Tech Stack

🛠️ **See [README.md](./README.md#-tech-stack) for complete technology specifications.**

---

## Features

### Public Features

- Browse and search sitters by location, service type (walking, boarding), and rating
- Filter sitters by price and availability
- View detailed sitter profiles with verified reviews
- Landing page with top-rated sitters

### Pet Owner Features

- Register and login as pet owner
- Create profiles for their pets (Name, Breed, Age, Notes)
- Book services (Walk, Sitting, Boarding)
- View upcoming and past bookings
- Leave reviews after completed services
- Manage profile

### Sitter Features

- Register and login as sitter
- Create and update sitter profile (Bio, Experience, Photos)
- Manage offered services and rates
- View and manage booking requests (Accept/Decline)
- Update booking status

### Admin Features

- View all users (Owners and Sitters)
- Manage user status (verify/suspend)
- View all bookings
- Manage service categories

---

## Pages & Routes

> ⚠️ **Note**: These routes are examples. You may add, edit, or remove routes based on your implementation needs.

### Public Routes

| Route          | Page           | Description                      |
| -------------- | -------------- | -------------------------------- |
| `/`            | Home           | Hero, search, featured sitters   |
| `/sitters`     | Browse Sitters | List with filters                |
| `/sitters/:id` | Sitter Profile | Details, services, reviews, book |
| `/login`       | Login          | Login form                       |
| `/register`    | Register       | Registration form                |

### Pet Owner Routes (Private)

| Route                 | Page        | Description                |
| --------------------- | ----------- | -------------------------- |
| `/dashboard`          | Dashboard   | Overview, pets, bookings   |
| `/dashboard/bookings` | My Bookings | Booking history and status |
| `/dashboard/pets`     | My Pets     | Manage pet profiles        |
| `/dashboard/profile`  | Profile     | Edit user info             |

### Sitter Routes (Private)

| Route               | Page            | Description              |
| ------------------- | --------------- | ------------------------ |
| `/sitter/dashboard` | Dashboard       | Upcoming requests, stats |
| `/sitter/services`  | My Services     | Manage services & rates  |
| `/sitter/bookings`  | Manage Bookings | Accept/Decline requests  |
| `/sitter/profile`   | Profile         | Edit sitter info         |

### Admin Routes (Private)

| Route               | Page          | Description               |
| ------------------- | ------------- | ------------------------- |
| `/admin`            | Dashboard     | Statistics                |
| `/admin/users`      | Users         | Manage users              |
| `/admin/bookings`   | Bookings      | All bookings              |
| `/admin/categories` | Service Types | Manage service categories |

---

## Database Tables

Design your own schema for the following tables:

- **Users** - Store user information and authentication details
- **Pets** - Pet profiles linked to Pet Owners
- **SitterProfiles** - Sitter-specific info (Bio, Experience, etc.) linked to Users
- **Services** - Services offered by sitters (e.g., Walking, Boarding) with rates
- **Bookings** - Service bookings between Owners and Sitters

> 💡 _Think about what fields each table needs based on the features above._

---

## API Endpoints

> ⚠️ **Note**: These endpoints are examples. You may add, edit, or remove endpoints based on your implementation needs.

### Authentication

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |
| GET    | `/api/auth/me`       | Get current user  |

### Sitters (Public)

| Method | Endpoint           | Description                     |
| ------ | ------------------ | ------------------------------- |
| GET    | `/api/sitters`     | Get all sitters with filters    |
| GET    | `/api/sitters/:id` | Get sitter details and services |

### Bookings

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| POST   | `/api/bookings`     | Create new booking  |
| GET    | `/api/bookings`     | Get user's bookings |
| GET    | `/api/bookings/:id` | Get booking details |

### Sitter Management

| Method | Endpoint                   | Description                                    |
| ------ | -------------------------- | ---------------------------------------------- |
| PUT    | `/api/sitter/profile`      | Update sitter profile                          |
| POST   | `/api/sitter/services`     | Add/Update service rates                       |
| PATCH  | `/api/sitter/bookings/:id` | Update booking status (Accept/Reject/Complete) |

### Admin

| Method | Endpoint               | Description        |
| ------ | ---------------------- | ------------------ |
| GET    | `/api/admin/users`     | Get all users      |
| PATCH  | `/api/admin/users/:id` | Update user status |

---

## Flow Diagrams

### 🐾 Pet Owner Journey

```
                              ┌──────────────┐
                              │   Register   │
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │  Add Pet(s)  │
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │Browse Sitters│
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │ Book Service │
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │ Track Status │
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │ Leave Review │
                              └──────────────┘
```

### 🧢 Sitter Journey

```
                              ┌──────────────┐
                              │   Register   │
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │Create Profile│
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │ Set Services │
                              │   & Rates    │
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │View Requests │
                              └──────────────┘
                                     │
                                     ▼
                              ┌──────────────┐
                              │Accept/Decline│
                              └──────────────┘
```

### 📊 Booking Status

```
                              ┌──────────────┐
                              │   PENDING    │
                              └──────────────┘
                               /            \
                              /              \
                       (sitter)          (owner)
                        accepts           cancels
                          /                  \
                         ▼                    ▼
                 ┌─────────────┐       ┌─────────────┐
                 │  CONFIRMED  │       │  CANCELLED  │
                 └─────────────┘       └─────────────┘
                        │
                     (sitter)
                    completes
                        │
                        ▼
                 ┌─────────────┐
                 │  COMPLETED  │
                 └─────────────┘
```

---

## Submission

📋 **See [README.md](./README.md) for submission guidelines, timeline, and marks.**
