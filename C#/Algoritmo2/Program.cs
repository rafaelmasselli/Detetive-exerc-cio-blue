using System;

namespace Teste
{
  class Program
  {
    static void Main(string[] args)
    {
      // Desenvolva uma lógica que leia os valores de A, B e C de uma equação do segundo grau e mostre o valor de Delta
      Console.WriteLine("Dite o valor A exemplo X² ");
      float A = int.Parse(Console.ReadLine());
      Console.WriteLine("Digte o valor de B sem elevação exemplo 9X");
      float B = int.Parse(Console.ReadLine());
      Console.WriteLine("Digite o valor de C o unico numero inteiro");
      float C = int.Parse(Console.ReadLine());
      float Delta = ((B * B) - 4 * A * C) / 2 * A;
      Console.WriteLine(Delta);

      // Crie um programa que leia o preço de um produto, calcule e mostre o seu PREÇO PROMOCIONAL, com 5 % de desconto
      Console.WriteLine("Digite o preço do produto");
      float produto = int.Parse(Console.ReadLine());
      Console.WriteLine("Digite o desconto do produto");
      float desconto = int.Parse(Console.ReadLine());
      float Resultado = (desconto / 100) * produto;
      Console.WriteLine($"foi descontado {Resultado}R$ do produto");

      //Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15 % de aumento
      Console.WriteLine("Salario atual");
      float Salario = int.Parse(Console.ReadLine());
      Console.WriteLine("Porcentagem do aumento do salario");
      float Aumento = int.Parse(Console.ReadLine());
      float ResultadoDoSalario = ((Aumento / 100) * Salario) + Salario;
      Console.WriteLine($" Você teve um aumento de {Aumento}% e o seu salario final e {ResultadoDoSalario}$");

      //A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
      // quantidade de dias pelos quais ele foi alugado.Calcule o preço total a pagar,sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado
      Console.WriteLine("Digite quantos km vc percorreu");
      float KmCorrido = int.Parse(Console.ReadLine());
      Console.WriteLine("Dias que o carro foi usado");
      float DiasDeUso = int.Parse(Console.ReadLine());
      float ResultadoKmCorrido = (KmCorrido * 20) / 100;
      float ResultadoDiasDeUso = DiasDeUso * 90;
      Console.WriteLine($"O alugel do carro foi de {ResultadoDiasDeUso}$, Preço de uso da corrida foi de {ResultadoKmCorrido}$  o preço total foi de {ResultadoDiasDeUso + ResultadoKmCorrido}$");

      //Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
      //por hora trabalhada
      Console.WriteLine("Digite quantos dias vc trabalhou");
      float DiasTabalhando = int.Parse(Console.ReadLine());
      Console.WriteLine($" voce lucrou {DiasTabalhando * 25}$ no total");

      //Escreva um programa para calcular a redução do tempo de vida de um
      //fumante.Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
      //já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
      //quantos dias de vida um fumante perderá e exiba o total em dias
      Console.WriteLine("Quantos cigarros por dia vc fuma?");
      int CigarrosPordias = int.Parse(Console.ReadLine());
      Console.WriteLine("Quantos anos vc fuma?");
      int AnosQueOUsuarioFuma = int.Parse(Console.ReadLine());
      int ResultadoDeDiasPerdido = (CigarrosPordias * 10) + (365 * AnosQueOUsuarioFuma) / 60;
      static void ConvesorDeHoras(int Minutos)
      {
        int Ano = 0;
        int Dias = 0;
        int Hora = 0;
        int MinutosFinal = 0;
        for (int i = 0; i < Minutos; i++)
        {
          if (Minutos >= 1440)
          {
            Dias += Dias;
            Minutos = Minutos - 1440;
          }
          if (Minutos >= 60)
          {
            Hora += Hora;
            Minutos = Minutos - 60;
          }
          if (Minutos <= 60)
          {
            MinutosFinal = Minutos;
            Minutos = Minutos - 0;
          }
          if (Minutos == 0)
          {
            Console.WriteLine($"Voce perdeu {Ano}Ano(s) {Dias}Dia(s) e {MinutosFinal}Minutos");
            return;
          }
        }
      }
      ConvesorDeHoras(ResultadoDeDiasPerdido);

      //Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
      //80Km / h, exiba uma mensagem dizendo que o usuário foi multado.Nesse caso, exiba
      //o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida
      Console.WriteLine("Digite a velocidade percorrida na viaduta");
      int VelocidadeDoVeiculo = int.Parse(Console.ReadLine());
      int multa = 0;
      if (VelocidadeDoVeiculo > 80)
      {
        multa = (VelocidadeDoVeiculo - 80) * 5;
        Console.WriteLine($"Limite de velocidade ultrapassado a multa foi de {multa}R$");
      }
      else
      {
        Console.WriteLine("Velocidade menor que 80km");
      }
      //Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
      //dela e depois mostre se ela pode ou não votar.
      Console.WriteLine("Digite a sua idade");
      int IdadeParaVotar = int.Parse(Console.ReadLine());

      if (IdadeParaVotar >= 18)
      {
        Console.Write("O voto e obrigatorio");
      }
      else if (IdadeParaVotar >= 70 || IdadeParaVotar == 16 || IdadeParaVotar == 17)
      {
        Console.Write("Voto e opicional");
      }
      else
      {
        Console.Write("Voce nao pode votar");
      }
      //Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua
      //média e mostre na tela.No final, analise a média e mostre se o aluno teve ou
      //não um bom aproveitamento(se ficou acima da média 7.0).
      Console.WriteLine("Digite o nome dos alunos");
      string aluno1 = Console.ReadLine();
      string aluno2 = Console.ReadLine();
      Console.WriteLine($"Digite a nota do {aluno1}");
      int nota1 = int.Parse(Console.ReadLine());
      int nota2 = int.Parse(Console.ReadLine());
      int nota3 = int.Parse(Console.ReadLine());
      int ResultadoAluno1 = (nota1 + nota2 + nota3) / 3;
      Console.WriteLine($"Digite a nota do {aluno2}");
      int nota1x = int.Parse(Console.ReadLine());
      int nota2x = int.Parse(Console.ReadLine());
      int nota3x = int.Parse(Console.ReadLine());
      int ResultadoAluno2 = (nota1x + nota2x + nota3x) / 3;
      if (ResultadoAluno1 >= 7)
      {
        Console.WriteLine($"O aluno {aluno1} tirou {ResultadoAluno1} de nota e foi aprovado");
      }
      else
      {
        Console.WriteLine($"O aluno {aluno1} foi reprovado");
      }

      if (ResultadoAluno2 >= 7)
      {
        Console.WriteLine($"O aluno {aluno2} tirou {ResultadoAluno2} de nota e foi aprovado");
      }
      else
      {
        Console.WriteLine($"O aluno {aluno2} foi reprovado");
      }
      //) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou
      //ÍMPAR
      Console.WriteLine("Digite um numero de um a dez");
      float number = int.Parse(Console.ReadLine());
      if (number == 0 || number == 2 || number == 4 || number == 6 || number == 8 || number == 10)
      {
        Console.WriteLine("O numero e par");
      }
      else if (number == 1 || number == 3 || number == 5 || number == 7 || number == 9)
      {
        Console.WriteLine("O numero e impar");
      }
      else
      {
        Console.WriteLine("Numero maior do que 10 ou menor do que 0");
      }

    }
  }
}
