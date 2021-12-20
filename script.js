let listItem = document.querySelector(".list-item");

let frist = document.querySelector(".frist");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let last = document.querySelector(".last");

let arrayList = [];
let page = 0;


////        the list items 

for (let i = 0; i <100; i++)
{
    let li = document.createElement("li");
    li.textContent = `list item ${i}`;
    arrayList.push(li);
}
console.log(arrayList);

///        in the frist time

for (let i = 0; i < 10; i++)
{
    listItem.appendChild(arrayList[i]);
}



next.addEventListener("click", () =>
{
    page == arrayList.length - 10 ? page = 0 : page += 10;
    console.log(page);
    listItem.innerHTML="";
    for (let i = page; i < page + 10; i++)
    {
        listItem.appendChild(arrayList[i]);
    }
})

prev.addEventListener("click", () => 
{
    page == 0 ? page = arrayList.length-10 : page -= 10;
    console.log(page);
    listItem.innerHTML="";
    for (let i = page; i < page + 10; i++)
    {
        listItem.appendChild(arrayList[i]);
    }
})

frist.addEventListener("click", () =>
{
    page =0;
    console.log(page);
    listItem.innerHTML="";
    for (let i = page; i < page + 10; i++)
    {
        listItem.appendChild(arrayList[i]);
    }
})

last.addEventListener("click", () =>
{
    page =arrayList.length-10;
    console.log(page);
    listItem.innerHTML="";
    for (let i = page; i < page + 10; i++)
    {
        listItem.appendChild(arrayList[i]);
    }
})