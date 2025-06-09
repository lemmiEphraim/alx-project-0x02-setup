// interfaces/index.ts
export interface CardProps {
  title: string;
  content: string;
  className?: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

