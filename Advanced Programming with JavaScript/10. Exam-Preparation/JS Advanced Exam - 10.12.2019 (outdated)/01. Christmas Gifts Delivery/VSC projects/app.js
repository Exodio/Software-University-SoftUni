function solution() {

    let giftInput = document.getElementsByTagName("input")[0]; //the data we receive
    let addGiftButton = document.getElementsByTagName("button")[0]; //the action button to move the data
    let listOfGifts = document.getElementsByTagName("ul")[0]; //the place where the data will be stored
    let sendGifts = document.getElementsByTagName("ul")[1]; //sent data storage
    let discardedGifts = document.getElementsByTagName("ul")[2]; //discarded data storage

    sortGifts = (ul) => { // sorting the gifts in alphabetical order 
        Array.from(ul.children) //We make an array from all of the ul.children => each li(listItem)
            .sort((a, b) => a.textContent.localeCompare(b.textContent)) //We sort them in alphabetical order comparing their names
            .forEach(li => ul.appendChild(li)); //We append back each li now sorted back to the initial ul
    }

    addGiftButton.addEventListener("click", (e) => {
        e.preventDefault(); //we prevent the page from reloading

        let liGift = document.createElement("li"); //we create the new li in which the elements will be stored
        liGift.textContent = giftInput.value; //we append the data input to the textContent of the new li
        liGift.className = "gift"; //we set it's class name
        listOfGifts.appendChild(liGift); //we append the button the each item in the list

        let sendButton = document.createElement("button"); //we create a new button
        sendButton.textContent = "Send"; //we the name of the button
        sendButton.id = "SendButton"; //we add an id to the button
        liGift.appendChild(sendButton); //we append the button the each list item

        let discardButton = document.createElement("button");
        discardButton.textContent = "Discard";
        discardButton.id = "discardButton";
        liGift.appendChild(discardButton); //we append the button the each list item

        sendButton.addEventListener("click", () => {
            let liSent = document.createElement("li"); //we create a new li in which we will save the sent gifts

            let endIndex = liGift.textContent.indexOf("Send"); //we locate where the save index is located
            liSent.textContent = liGift.textContent.slice(0, endIndex); //we move each name from the gifts ul without moving the entire list

            liSent.className = "gift"; //we set the new class name
            sendGifts.appendChild(liSent); //we add the new li(liSent) to the initial ul(sendGifts)

            liGift.remove(); //we remove the information as it has already been listed under the according ul
        });

        discardButton.addEventListener("click", () => {
            let liDiscard = document.createElement("li");

            let endIndex = liGift.textContent.indexOf("Send");
            liDiscard.textContent = liGift.textContent.slice(0, endIndex);

            liDiscard.className = "gift";
            discardedGifts.appendChild(liDiscard);

            liGift.remove();
        });

        sortGifts(listOfGifts); //we sort the initial list of items after each action
        giftInput.value = ""; //we clear the input field
    });
}