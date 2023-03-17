import java.io.IOException;
import java.util.Scanner;

public class App {
    public static void main(String[] args) {
    }
    public static void positiveValue() {
        Scanner leitor = new Scanner(System.in);
        int cont = 0;
        double media = 0;
        double x;
        for (int i = 0; i < 6; i++) {
            x = leitor.nextDouble();
            if (x > 0) {
                cont++;
                media = media + x;
            }

        }

        System.out.println(cont + " valores positivos");
        System.out.println(String.format("%.1f", media / cont));
    }

    public static void SumValue() {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        double h = 0.0;
        for (int i = 1; i <= n; i++) {
            h += 1.0 / i;
        }
        System.out.printf("%.0f", h);
    }

    public static void dragon() {
        int casos, poderDeLuta;

        Scanner ler = new Scanner(System.in);

        casos = ler.nextInt();

        for (int i = 0; i < casos; i++) {
            poderDeLuta = ler.nextInt();
            if (poderDeLuta <= 8000) {
                System.out.println("Inseto!");
            } else {
                System.out.println("Mais de 8000!");
            }
        }
    }

}
