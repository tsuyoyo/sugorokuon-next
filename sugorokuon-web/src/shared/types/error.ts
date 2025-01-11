export type ApiError = {
  status: number;
  message: string;
};

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
