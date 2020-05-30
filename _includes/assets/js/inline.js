if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", function() {
        document.location.href = "/admin/";
      });
    }
  });
}
