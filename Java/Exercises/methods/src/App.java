
public class App {
    public static void main(String[] args) throws Exception {
        // Mensagem de bom dia, boa tarde ou boa noite dependendo da hora que esta no
        // seu computador
        System.out.println(periodMessage.message());
        // Soma
        System.out.println(calculator.sum(1, 1));
        // Divisao
        System.out.println(calculator.division(5, 10));
        // Multiplicacao
        System.out.println(calculator.multiplication(10, 5));
        // Subtracao
        System.out.println(calculator.subtraction(6, 1));
    }
}
