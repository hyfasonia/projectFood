function deleteRecipe(recipeId) {
    fetch("/delete-recipe", {
      method: "POST",
      body: JSON.stringify({ recipeId: recipeIdId }),
    }).then((_res) => {
      window.location.href = "/";
    });
  }