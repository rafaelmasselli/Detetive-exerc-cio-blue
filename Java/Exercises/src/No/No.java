package No;

public class No<T> {
  private T conteudo;
  private No<T> proximoNo;

  public No(T conteudo) {
    this.conteudo = null;
    this.conteudo = conteudo;
  }

  public T getConteudo() {
    return conteudo;
  }

  public No<T> getProximoNo() {
    return proximoNo;
  }

  public void setConteudo(T conteudo) {
    this.conteudo = conteudo;
  }

  public void setProximoNo(No<T> proximoNo) {
    this.proximoNo = proximoNo;
  }

  @Override
  public String toString() {
    return "Conteudo = " + conteudo;

  }

  public static void Nos() {
    No<String> no1 = new No<>("Conteudo no1");

    No<String> no2 = new No<>("Conteudo no2");
    no1.setProximoNo(no2);

    No<String> no3 = new No<>("Conteudo no3");
    no2.setProximoNo(no3);

    No<String> no4 = new No<>("Conteudo no4");
    no3.setProximoNo(no4);

    // no1->no2->no3->no4->null

    System.out.println(no1);
    System.out.println(no1);

    System.out.println(no2);
    System.out.println(no1.getProximoNo());

    System.out.println(no3);
    System.out.println(no1.getProximoNo().getProximoNo());

    System.out.println(no4);
    System.out.println(no1.getProximoNo().getProximoNo().getProximoNo());
  }

}
