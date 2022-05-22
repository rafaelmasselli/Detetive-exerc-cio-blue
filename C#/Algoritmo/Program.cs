using System;


namespace Teste
{
    class Program
    {
        static void Main(string[] args)
        {
            //Hello world
            Console.WriteLine("Hello, World!");

            // Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela
            string Nome = "rafael";
            Console.WriteLine($"Hello {Nome}");

            //Crie um programa que leia o nome e o salário de um funcionário, mostrando no  final uma mensagem
            int Salario = 2;
            Console.WriteLine($"Nome:{Nome} Salario: {Salario}");

            // Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles
            int Salario2 = 4;
            Console.WriteLine($"A soma dos salarios e {Salario + Salario2}");

            //Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina
            int Nota = 8;
            int Nota1 = 9;
            int Nota2 = 10;
            int Nota3 = 9;
            int Nota4 = 8;
            float Result = Nota + Nota1 + Nota2 + Nota3 + Nota4;
            Console.WriteLine(Result / 5);

            //Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor
            Console.WriteLine("Digite um numero");
            int numero = int.Parse(Console.ReadLine());
            Console.WriteLine(numero - 1);

            //Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a sua terça parte  
            int Valor = 2;
            int Doblo = 2 * 2;
            int Tvalor = 2 / 3;
            Console.WriteLine($"O valor inicial: {Valor} o Doblo do valor {Doblo} e a terca parte {Tvalor}");

            // Desenvolva um programa que leia uma distância em metros e mostre os valores relativos em outras medidas.
            Console.WriteLine("Digite uma distancia em metro");
            float Metros = int.Parse(Console.ReadLine());
            float km = Metros / 1000;
            float hm = Metros / 100;
            float dam = Metros * 10;
            float dm = Metros / 10;
            float cm = Metros * 100;
            float mm = Metros / 1000;
            Console.WriteLine($"km {km} hm {hm} dam {dam} dm {dm} cm {cm} mm {mm}");

            //Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar.Considere US$1,00 = R$3,45
            Console.WriteLine("Digite o quanto vôce tem na carteira");
            float Carteira = int.Parse(Console.ReadLine());
            double Convesor = Carteira / 3.45;
            Console.WriteLine($" Você tem {Convesor} dolares");



            // Faça um algoritmo que leia a largura e altura de uma parede, calcule e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
            Console.WriteLine("Digite a altura da parede");
            int Y = int.Parse(Console.ReadLine());
            Console.WriteLine("Digite a largura da parede");
            int X = int.Parse(Console.ReadLine());
            int Area = X * Y;
            Console.WriteLine($"A parede tem {Area} de area e sera gasto {Area * 2} litros de tinta para pintar toda a parede");
        }
    }
}
