$(() => $("#createButton").click(createUser));

function createUser() {
  // const salaryVal = $("input[name=salary]")
  //   .val()
  //   .trim();
  // const salary = parseInt(salaryVal, 10);

  const user = {
    number: $("input[name=number]")
    .val()
    .trim(),
    name: $("input[name=name]")
      .val()
      .trim(),
    email: $("textarea[name=email]")
      .val()
      .trim(),
    phone: $("input[name=phone]")
      .val()
      .trim(),
  };

  const request = $.ajax({
    type: "post",
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(user)
  });

  request.done(function(data) {
    console.log("creation done", data);
  });

  request.fail(function(jqXHR, textStatus, errorThrown) {
    console.log(jqXHR, textStatus, errorThrown);
  });
}