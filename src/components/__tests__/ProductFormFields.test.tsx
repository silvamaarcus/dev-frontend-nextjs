import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";

import ProductFormFields from "../ProductFormFields";

interface MockFormProps {
  children: React.ReactNode;
}

const MockForm = ({ children }: MockFormProps) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      price: 0,
      category: "",
      image: "",
      description: "",
    },
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

test("deve renderizar todos os campos do formulário", () => {
  render(<ProductFormFields onSubmit={jest.fn()} isEditing={false} />, {
    wrapper: MockForm,
  });

  // Verifica os elementos importantes
  expect(screen.getByLabelText("Nome do Produto")).toBeInTheDocument();
  expect(screen.getByLabelText("Preço")).toBeInTheDocument();
  expect(screen.getByText("Categoria")).toBeInTheDocument();
  expect(screen.getByLabelText("URL da Imagem")).toBeInTheDocument();
  expect(screen.getByLabelText("Descrição")).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Criar Produto" }),
  ).toBeInTheDocument();
});

test("deve mostrar mensagens de erro ao enviar o fomulário vazio", async () => {
  render(<ProductFormFields onSubmit={jest.fn()} isEditing={false} />, {
    wrapper: MockForm,
  });

  const submitButton = screen.getByRole("button", { name: "Criar Produto" });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(screen.getByText("Nome é obrigatório.")).toBeInTheDocument();
    expect(screen.getByText("O preço deve ser maior que zero.")).toBeInTheDocument();
    expect(screen.getByText("Categoria é obrigatória.")).toBeInTheDocument();
    expect(
      screen.getByText("URL da imagem é obrigatória."),
    ).toBeInTheDocument();
    expect(screen.getByText("Descrição é obrigatória.")).toBeInTheDocument();
  });
});
