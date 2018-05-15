$(clickHandler);

function clickHandler() {
  $(".deleteButton").click(function() {
    if (confirm('Are you sure you want to delete?')) {
    const uid = $(this).attr("data-uid");
    console.log("delete: ", uid);
    deleteUser(uid);
    } else{}
  });
}

function deleteUser(uid) {
  const request = $.ajax({
    url: `/users/user/${uid}`,
    type: "delete",
    success: function(data) {
      console.log("delete done", data);
      window.location.reload();
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.log("error happened");
      console.log(jqXHR, textStatus, errorThrown);
    }
  });
}