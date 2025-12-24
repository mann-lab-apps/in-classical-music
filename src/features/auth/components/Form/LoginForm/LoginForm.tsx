import { Button } from "@/components/Elements";
import { Form } from "@/components/Form";
import { InputField } from "@/components/Form/InputField";
import { FormWrapper } from "./LoginForm.style";
import { FieldValues } from "react-hook-form";
import { loginWithEmailAndPasswordAndfcmToken } from "@/features/auth/api";
import { storage } from "@/utils/storage";
import { initializeFCM } from "@/libraries/firebase";

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const handleSubmit = async (values: FieldValues) => {
    const { email, password } = values;
    const fcmToken = await initializeFCM();
    if (!fcmToken) return;
    try {
      const loginResponse = await loginWithEmailAndPasswordAndfcmToken({
        email,
        password,
        fcmToken,
      });
      storage.setValue("token", loginResponse.data.token);
    } catch (error) {
      console.error(error);
    }
    // onSuccess();
  };

  return (
    <Form onSubmit={handleSubmit}>
      {({ register, formState }) => (
        <FormWrapper>
          <InputField
            label="이메일"
            type="email"
            registration={register("email", { required: true })}
            error={formState.errors["email"]}
          />
          <InputField
            label="비밀번호"
            type="password"
            registration={register("password", { required: true })}
            error={formState.errors["password"]}
          />
          <Button variant="primary" padding="10px">
            이메일 로그인
          </Button>
        </FormWrapper>
      )}
    </Form>
  );
};
