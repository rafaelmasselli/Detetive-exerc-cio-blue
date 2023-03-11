public class loan {

  public static int getTwoInstallments() {
    return 2;
  }

  public static int getThreeInstallments() {

    return 3;
  }

  public static double getFeeTwoInstallments() {

    return 0.3;
  }

  public static double getFeeThreeInstallments() {

    return 0.45;
  }

  public static void calcular(double value, int Installments) {

    if (Installments == 2) {

      double finalValue = value + (value * getTwoInstallments());

      System.out.println("Valor final do empréstimo para 2 parcelas: R$ " + finalValue);
    } else if (Installments == 3) {

      double finalValue = value + (value * getThreeInstallments());

      System.out.println("Valor final do empréstimo para 3 parcelas: R$ " + finalValue);
    } else {
      System.out.println("Quantidade de parcelas não aceita.");
    }

  }
}
