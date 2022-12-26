const event = {
    name: 'Birthday Party',
    question: ['Aradhya', 'Rishi'],
    printList(){
        console.log(this.name);

        this.question.forEach((guest)=>{
            console.log(guest+" "+this.name)
        })
    }
}
event.printList()