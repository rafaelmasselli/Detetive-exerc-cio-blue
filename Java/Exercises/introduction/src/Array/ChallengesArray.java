package Array;

import java.util.Random;
import java.util.Scanner;

public class ChallengesArray {

  public static void Array1() {
    /*
     * Crie um vetor de 6 números inteiros
     * e mostre-os na ordem inversa.
     */

    int[] vetor = { 0, 1, 5, 7, 1, 4, };

    for (int i = (vetor.length - 1); i >= 0; i--)
      System.out.println(vetor[i]);

  }

  public static void Array2() {
    /*
     * Faça um Programa que leia um vetor de 6 caracteres,
     * e diga quantas consoantes foram lidas.
     * Imprima as consoantes.
     */
    Scanner scan = new Scanner(System.in);
    String[] Consoantes = new String[6];
    int QuantidadeDeConsoantes = 0;
    int count = 0;
    do {
      System.out.println("Letra");
      String letra = scan.next();
      if (!letra.equalsIgnoreCase("a") || !letra.equalsIgnoreCase("e") || !letra.equalsIgnoreCase("i")
          || !letra.equalsIgnoreCase("o") || !letra.equalsIgnoreCase("u")) {
        Consoantes[count] = letra;
        QuantidadeDeConsoantes++;
      }
      count++;
    } while (count < Consoantes.length);

    System.out.println("Consoantes");
    for (String result : Consoantes)
      if (result != null)
        System.out.println(Consoantes);
    System.out.println(QuantidadeDeConsoantes);
    System.out.println(Consoantes.length);
  }

  public static void Array3() {

    /*
     * Faça um Programa que leia 20 números inteiros aleatórios (entre 0 e 100)
     * armazene-os num vetor.
     * Ao final mostre os números e seus sucessores.
     */

    Random random = new Random();
    int[] numerosAleatorios = new int[20];

    for (int i = 0; i < numerosAleatorios.length; i++) {
      int numero = random.nextInt(100);
      numerosAleatorios[i] = numero;
    }

    System.out.println("Numeros aleatorioos");
    for (int numero : numerosAleatorios)
      System.out.println(numero);

    System.out.println("Numeros aleatorioos + 1");
    for (int numero : numerosAleatorios)
      System.out.println(numero + 1);
  }

  public static void Array4() {
    /*
     * Gere e imprima uma matriz M 4x4 com valores aleatórios entre 0-9.
     */
    int[][] M = new int[4][4];
    Random random = new Random();

    for (int i = 0; i < M.length; i++)
      for (int j = 0; j < M[i].length; j++)
        M[i][j] = random.nextInt(9);

    System.out.println("Matriz: ");
    for (int[] line : M)
      for (int column : line)
        System.out.print(column + " ");

  }
}