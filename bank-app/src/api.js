const API_URL = 'http://localhost:5000';

// Получить всех пользователей
export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
};

// Получить пользователя по ID
export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`);
  return response.json();
};

// Создать нового пользователя
export const createUser = async (user) => {
  const response = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Обновить пользователя
export const updateUser = async (user) => {
  const response = await fetch(`${API_URL}/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json();
};

// Удалить пользователя
export const deleteUser = async (id) => {
  const response = await fetch(`${API_URL}/users/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};


// API для подключенного бэкенда
// const API_URL = "http://localhost:80";

// // Получить всех пользователей
// export const getUsers = async () => {
//   try {
//     const response = await fetch(`${API_URL}/getusers`);
//     if (!response.ok) {
//       throw new Error("Ошибка при получении списка пользователей");
//     }
//     const result = await response.json();
//     if (!result.status) {
//       throw new Error(
//         result.description || "Ошибка при получении списка пользователей"
//       );
//     }
//     return result.data;
//   } catch (error) {
//     console.error("Error fetching users:", error);
//     return [];
//   }
// };

// // Получить пользователя по ID
// export const getUserById = async (id) => {
//   try {
//     const response = await fetch(`${API_URL}/GetUser?id=${id}`);
//     if (!response.ok) {
//       throw new Error(`Ошибка при получении пользователя с ID ${id}`);
//     }
//     const result = await response.json();
//     if (!result.status) {
//       throw new Error(
//         result.description || `Ошибка при получении пользователя с ID ${id}`
//       );
//     }
//     return result.data;
//   } catch (error) {
//     console.error(`Error fetching user with ID ${id}:`, error);
//     return null;
//   }
// };

// // Создать нового пользователя
// export const createUser = async (user) => {
//   try {
//     const response = await fetch(`${API_URL}/createuser`, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });
//     if (!response.ok) {
//       throw new Error("Ошибка при создании пользователя");
//     }
//     const result = await response.json();
//     if (!result.status) {
//       throw new Error(result.description || "Ошибка при создании пользователя");
//     }
//     return result.data;
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return null;
//   }
// };

// // Обновить пользователя
// export const updateUser = async (user) => {
//   try {
//     const response = await fetch(`${API_URL}/updateuser`, {
//       method: "PUT",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(user),
//     });
//     if (!response.ok) {
//       throw new Error("Ошибка при обновлении пользователя");
//     }
//     const result = await response.json();
//     if (!result.status) {
//       throw new Error(
//         result.description || "Ошибка при обновлении пользователя"
//       );
//     }
//     return result.data;
//   } catch (error) {
//     console.error("Error updating user:", error);
//     return null;
//   }
// };

// // Удалить пользователя
// export const deleteUser = async (id) => {
//   try {
//     const response = await fetch(`${API_URL}/DeleteUser?id=${id}`, {
//       method: "DELETE",
//     });
//     if (!response.ok) {
//       throw new Error(`Ошибка при удалении пользователя с ID ${id}`);
//     }
//     const result = await response.json();
//     if (!result.status) {
//       throw new Error(
//         result.description || `Ошибка при удалении пользователя с ID ${id}`
//       );
//     }
//     return result.data;
//   } catch (error) {
//     console.error(`Error deleting user with ID ${id}:`, error);
//     return null;
//   }
// };
