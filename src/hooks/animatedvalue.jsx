import { useSpring } from "@react-spring/web";

export const useAnimatedValue = (value) => {
    const springProps = useSpring({
        from: {val: 0},
        val: value,
        config: {tension: 70, friction: 16},
    })

    return springProps
}