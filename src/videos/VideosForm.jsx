import React from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { createVideo } from '../store/videos'
import { AppInput, Fieldset } from '../components/AppInput'
import { AppButton, CenteredContainer, SmallContainer as SmallContainerTemplate } from '../theme'
import styled from 'styled-components'

const SmallContainer = styled(SmallContainerTemplate)`
    text-align: center;
`

export const VideosForm = () => {   
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()

    const onSubmit = async (video) => {
        const formData = new FormData()

        formData.append('title', video.title)
        formData.append('video', video.video[0])

        console.log(video)
        dispatch(
            createVideo(formData)
        )
    }

    return (
        <CenteredContainer>
            <SmallContainer>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <AppInput type="text" name="tile" register={register} placeholder="Título" />
                    <Fieldset>
                    <label for="video">Archivo del video</label>
                    <input type="file"
                        { ...register("video") } placeholder="" />
                    </Fieldset>
                    <AppButton  type="submit" small>Subir video</AppButton>
                </form>
            </SmallContainer>
        </CenteredContainer>
    )
}
