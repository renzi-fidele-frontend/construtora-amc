export async function login(formData: FormData) {
   const email = formData.get("email");
   const password = formData.get("password");

   if (email && password) {
      const res = await fetch("/api/login", {
         method: "POST",
         body: JSON.stringify({ email, password }),
         headers: { "Content-Type": "application/json" },
      });
      const user = await res.json();
   }

   console.log(email, password);
}

export function logout() {}

// O procedimento a seguir deverá ser implementado com
