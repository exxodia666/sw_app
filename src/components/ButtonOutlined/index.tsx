import React, { FC } from 'react'
import { Button, ButtonText } from './styled'
import { TButtonOutlined } from './types'

const ButtonOutlined: FC<TButtonOutlined> = ({ title, onPress }) => {
    return (
        <Button onPress={onPress}>
            <ButtonText>{title}</ButtonText>
        </Button>
    )
}

export default ButtonOutlined