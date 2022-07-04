import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {

        Scanner sc = new Scanner(System.in);
         
        int salario , percentual,  aumentoDoSalario;
         salario = 10;

        if(salario <= 200){
            percentual = 20;
        }else if(salario <=700){
            percentual = 15;
        }else if(salario <= 1500){
            percentual = 10;
        }else {
            percentual = 5;
        }
        System.out.println("Salario antes do reajuste " + salario);
        percentual = percentual / 100;
        

        aumentoDoSalario = percentual * salario;
    }
}
