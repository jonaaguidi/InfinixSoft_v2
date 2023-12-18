export const getAuthorName = (authorId) => {
    const authorMap = {
      // Agrega más IDs y nombres según sea necesario para los Autores.
      "5GFHkUtBVi2ptGtgriUjuB" : "Jonathan Guidi",
      "3dy8OoHIKRJeHPHjpwjKKT" : "Luis Paez",
      "15xKxoUhF6JHdmbvy2y13R" : "Tomas Boggan"
    };

    // Si no esta el ID, me devuelve "..."
    return authorMap[authorId] || "...";
  };