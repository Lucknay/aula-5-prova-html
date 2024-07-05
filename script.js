
const tarefas = []

const tarefas_domesticas = prompt("Digite aqui uma tarefa domestica:")

function adicionar_tarefa(tarefas_domesticas) {
    tarefas.push(tarefas_domesticas)

} 
 
function remover_tarefa(removedor){

    if(removedor >= 0 && removedor < tarefas.length){
        tarefas.splice(removedor, 1)
    } else{
        console.log("Removedor inválido!")
    }

   
    
}function listarTarefas() {
    console.log("Tarefas:");
    tarefas.forEach((tarefa, indice) => {
        console.log(`${indice + 1}. ${tarefa}`);
    }); }

adicionar_tarefa(tarefas_domesticas);
adicionar_tarefa(tarefas_domesticas);
adicionar_tarefa(tarefas_domesticas);


listarTarefas();

remover_tarefa(1);


listarTarefas();
