using System;

namespace Teste
{
  class Program
  {
    static void Main(string[] args)
    {
      //Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
      //BISSEXTO.
      Console.WriteLine("Digite o ano");
      int Ano = int.Parse(Console.ReadLine());

      if (Ano % 400 == 0)
      {
        Console.WriteLine("O ano e BISSEXTO");
      }
      else
      {
        if (Ano % 4 == 0 && Ano % 10 != 0)
        {
          Console.WriteLine("O ano e BISSEXTO");
        }
        else
        {
          Console.WriteLine("Ano nao e bissexto");
        }
      }

      // Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua
      // situação em relação ao alistamento militar.
      // -Se estiver antes dos 18 anos, mostre em quantos anos faltam para o
      // alistamento.
      // - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do
      // alistamento
      Console.WriteLine("Digite a sua idade");
      int Idade = int.Parse(Console.ReadLine());
      if (Idade >= 18)
      {
        Console.WriteLine($"Ja passou {Idade - 18} do tempo de voce se alistar");
      }
      else
      {
        Console.WriteLine($"Falta {18 - Idade} anos para voce se alistar ");
      }
      // Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
      // para todos, mas especialmente para mulheres.Faça um programa que leia nome,
      // sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
      // que:
      // -Homens ganham 5 % de desconto
      // - Mulheres ganham 13 % de desconto
      Console.WriteLine("Digite o seu nome");
      string NomeParaDesconto = Console.ReadLine();
      Console.WriteLine("Digite o seu sexo");
      string SexoParaDesconto = Console.ReadLine().ToLower();

      if (SexoParaDesconto[0] == 'm' && SexoParaDesconto[1] == 'u' || SexoParaDesconto[0] == 'f')
      {
        Console.WriteLine($"{NomeParaDesconto} voce obteve 13% de desconto");
      }
      else if (SexoParaDesconto[0] == 'm' && SexoParaDesconto[1] == 'a' || SexoParaDesconto[0] == 'h')
      {
        Console.WriteLine($"{NomeParaDesconto} voce obteve 5% de desconto");
      }
      else
      {
        Console.WriteLine("Sexo invalido");
      }

      // Faça um algoritmo que pergunte a distância que um passageiro deseja
      // percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
      // viagens até 200Km e R$0.45 para viagens mais longas
      Console.WriteLine("A distancia da viagem em KM");
      int KmPercorrido = int.Parse(Console.ReadLine());
      if (KmPercorrido > 200)
      {
        Console.WriteLine((KmPercorrido - 200) * (5 / 10));
      }
      else
      {
        Console.WriteLine("A viagem vai custar 0,50R$");
      }

      //  Crie um programa que leia o tamanho de três segmentos de reta.
      // Analise seus comprimentos e diga se é possível formar um triângulo com essas
      // retas.Matematicamente, para três segmentos formarem um triângulo, o comprimento
      // de cada lado deve ser menor que a soma dos outros dois


    }
  }
}
