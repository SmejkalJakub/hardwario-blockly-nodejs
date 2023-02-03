window.addEventListener('load', loadFile);

function saveFile() {
    // Get contents of div with id editor
    var contents = editor.getValue();

    // Send YAML to the server
    $.ajax({
        type: "POST",
        url: "/save_user_block",
        data: {
            data: contents,
            name: user_block
        },
        success: function (data) {
            // Display success message
            var message = document.getElementById("message");
            message.innerHTML = "Saved";
            setTimeout(function () {
                message.innerHTML = "";
            }

                , 2000);
        }
    });
}

function loadFile() {
    if (user_block === "" && pre_made_block === "") {
        //TODO: Return to blocks creator home page
    }
    else if (user_block !== "") {
        $.ajax({
            url: "/load_user_block",
            type: "GET",
            data: {
                name: user_block
            },
        }).done(function (data) {
            var xml = Blockly.Xml.textToDom(data);
            Blockly.Xml.domToWorkspace(xml, Blockly.getMainWorkspace());
        }
        );
    }
    else if (pre_made_block !== "") {
        $.ajax({
            url: "/load_pre_made_block",
            type: "GET",
            data: {
                name: pre_made_block
            },
        }).done(function (data) {
            editor.setValue(data);
            editor.setReadOnly(true);
            document.getElementById('saveButton').style.display = 'none';
        }
        );
    }
}
