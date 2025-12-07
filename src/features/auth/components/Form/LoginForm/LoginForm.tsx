import { Button } from "@/components/Elements";
import { Form } from "@/components/Form";
import { InputField } from "@/components/Form/InputField";
import { FormWrapper } from "./LoginForm.style";
import { FieldValues } from "react-hook-form";
import { loginWithEmailAndPassword } from "@/features/auth/api";
import { storage } from "@/utils/storage";
import { initializeFCM } from "@/libraries/firebase";
import { gerUserInfo, updateUserAttribute } from "@/features/users/api";

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const handleSubmit = async (values: FieldValues) => {
    const { email, password } = values;
    try {
      const loginResponse = await loginWithEmailAndPassword({
        email,
        password,
      });
      storage.setValue("token", loginResponse.data.token);

      const getUserInfoResponse = await gerUserInfo();
      const userId = getUserInfoResponse.data.id.id;
      storage.setValue("userId", userId);

      const fcmToken = await initializeFCM();
      updateUserAttribute({
        userId,
        body: {
          fcmToken,
        },
      });
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
