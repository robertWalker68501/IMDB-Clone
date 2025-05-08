import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className='flex h-[calc(100vh-70px)] flex-col items-center justify-center p-3'>
      <SignIn />
    </div>
  );
}
