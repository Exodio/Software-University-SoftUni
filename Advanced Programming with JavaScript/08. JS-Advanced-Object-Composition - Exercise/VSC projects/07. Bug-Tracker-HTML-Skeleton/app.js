function solve() {
    
  let data = [];
  let idCounter = 0;
  let outputSelector;

  let trackModule = {
    report: function (author, description, reproducible, severity) {
      let newReport = {
        id: idCounter++,
        author: author,
        description: description,
        reproducible: reproducible,
        severity: severity,
        status: "Open",
      };

      data.push(newReport);
      this.output(outputSelector);
    },
    setStatus: function (id, newStatus) {
      for (const obj of data) {
        if (obj.id === id) {
          obj.status = newStatus;
        }
      }

      this.output(outputSelector);
    },
    remove: function (id) {
      data = data.filter((bug) => bug.id !== id);

      this.output(outputSelector);
    },
    sort: function (method) {
      let sorting = method.toLowerCase();

      switch (sorting) {
        case "author":
          data.sort((a, b) => a.author.localeCompare(b.author));
          break;
        case "severity":
          data.sort((a, b) => a.severity - b.severity);

          break;
        case "id":
          data.sort((a, b) => a.id - b.id);
          break;
      }

      this.output(outputSelector);
    },
    output: function (selector) {
      $(selector).empty();
      outputSelector = selector;

      for (const obj of data) {
        $(selector).append(
          $("<div>")
            .attr("id", "report_" + obj.id)
            .addClass("report")
            .append(
              $("<div>").addClass("body").append($("<p>").text(obj.description))
            )
            .append(
              $("<div>")
                .addClass("title")
                .append(
                  $("<span>")
                    .addClass("author")
                    .text("Submitted by: " + obj.author)
                )
                .append(
                  $("<span>")
                    .addClass("status")
                    .text(obj.status + " | " + obj.severity)
                )
            )
        );
      }
    },
  };

  return trackModule;
}
