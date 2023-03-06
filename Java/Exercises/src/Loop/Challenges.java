package Loop;

import java.util.Scanner;

public class Challenges {

  public static void Loop1() {
    /*
     * 1 - Faça um programa que leia conjuntos de dois valores,
     * o primeiro representando o nome do aluno e o segundo representando a sua
     * idade.
     * (Pare o programa inserindo o valor 0 no campo nome)
     */

    Scanner scan = new Scanner(System.in);
    String name;
    int idade;

    while (true) {
      System.out.println("Nome: ");
      name = scan.next();
      if (name.equals("0"))
        break;

      System.out.println("Idade: ");
      idade = scan.nextInt();

    }
  }

  public static void Loop2() {
    /*
     * 2 - Faça um programa que peça uma nota, entre zero e dez.
     * Mostre uma mensagem caso o valor seja inválido
     * e continue pedindo
     * até que o usuário informe um valor válido.
     * 
     */
    Scanner scan = new Scanner(System.in);
    int nota;

    System.out.println("Nota: ");
    nota = scan.nextInt();

    while (nota > 10 || nota < 0) {
      System.out.println("Digite uma nota de 10 a 0");
      nota = scan.nextInt();
    }

  }

  public static void Loop3() {
    /*
     * Faça um programa que leia 5 números
     * e informe o maior número
     * e a média desses números.
     */

    Scanner scan = new Scanner(System.in);
    int numero;
    int maior = 0;
    int soma = 0;

    for (int i = 0; i < 5; i++) {
      System.out.print("Digite um numero");
      numero = scan.nextInt();

      soma = soma + numero;

      if (numero > maior)
        maior = numero;
    }

    System.out.println("Maior numero " + maior);
    System.out.println("Soma dos numeros " + soma);
  }

  public static void Loop4() {
    /*
     * Faça um programa que peça N números inteiros,
     * calcule e mostre a quantidade de números pares
     * e a quantidade de números impares.
     */
    Scanner scan = new Scanner(System.in);
    int num;
    int index;
    int qunatidadePares = 0;
    int quantidadeImpares = 0;

    System.out.print("Digite o numero de vezes que o laco ira executar");
    num = scan.nextInt();

    for (int i = 0; i < num; i++) {
      System.out.print("Digite um numero");
      index = scan.nextInt();
      if (index % 2 == 0) {
        qunatidadePares++;
      } else {
        quantidadeImpares++;
      }

    }

    System.out.println("Quantidade de numeros paraes " + qunatidadePares);
    System.out.println("Quantidade de numeros imparaes " + quantidadeImpares);

  }

  public static void Loop5() {
    /*
     * Desenvolva um gerador de tabuada,
     * capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10.
     * O usuário deve informar de qual numero ele deseja ver a tabuada.
     * A saída deve ser conforme o exemplo abaixo:
     * Tabuada de 5:
     * 5 X 1 = 5
     * 5 X 2 = 10
     * ...
     * 5 X 10 = 50
     */
    Scanner scan = new Scanner(System.in);
    int indexTabuada, multiplicacaoDaTabuada;
    System.out.println("Qual numero que voce deseja ver a tabuada");
    indexTabuada = scan.nextInt();

    for (int i = 0; i < 11; i++) {
      multiplicacaoDaTabuada = i * indexTabuada;
      System.out.println(i + "x" + indexTabuada + " = " + multiplicacaoDaTabuada);
    }
  }

  public static void Loop6() {
    /*
     * Faça um programa que calcule o fatorial de um número inteiro fornecido pelo
     * usuário.
     * Ex.: 5!= 120 (5 X 4 X 3 X 2 X 1)
     */
    int fatorial = 0;
    int multiplicacao = 1;
    Scanner scan = new Scanner(System.in);

    System.out.println("Fatorial de: ");
    fatorial = scan.nextInt();

    for (int i = fatorial; i >= 1; i--) {
      multiplicacao = multiplicacao * i;
    }

    System.out.println(multiplicacao);
  }
}
