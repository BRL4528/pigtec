import { ToastAndroid } from 'react-native';

interface Props {
  title: string;
  description: string;
}

export function toastNative({ title, description }: Props) {
    ToastAndroid.showWithGravity(`${description}`,   
    ToastAndroid.SHORT,
    ToastAndroid.TOP
    )
}