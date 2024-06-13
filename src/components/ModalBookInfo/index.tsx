/* eslint-disable no-mixed-spaces-and-tabs */
import { Image, Modal, ScrollView, Text } from 'react-native';
import { MainContainer, TextInfo, ViewTextInfo } from './styles';
import { Doc } from '../../@types/Doc';

interface ModalProps{
    isModalVisible: boolean;
    onClose: () => void;
    data: Doc;
}
export default function ModalBookInfo({isModalVisible, onClose, data}: ModalProps){

	function closeModal() {
		onClose();
	}

	return(
		<Modal
			visible={isModalVisible}
			transparent
			onRequestClose={closeModal}
			animationType='slide'
		>

			<MainContainer>
				<ScrollView contentContainerStyle={{ gap: 15, justifyContent: 'center', alignItems: 'center'}}>
					<Text style={{color: '#fff', fontSize: 18, textAlign: 'center', fontWeight: 'bold'}}>
						{data.title}
					</Text>
					{data.cover_i ? (
						<Image
							source={{
								uri: `https://covers.openlibrary.org/b/id/${data.cover_i}.jpg`,
								width: 150,
								height: 250,
							}}
							resizeMode='stretch'
						/>
					) :
						(
							<Image
								source={require('../../assets/empty_image.png')}
								style={{ width: 100, height: 150 }}
							/>
						)}
					<ViewTextInfo>
						{data.number_of_pages_median &&
						<TextInfo style={{fontWeight: 'bold'}}>{data.number_of_pages_median} Páginas</TextInfo>
						}
						{data.author_name &&
						<TextInfo>
							<Text style={{fontWeight: 'bold'}}>Autor: </Text>
							{data.author_name?.join(', ')}
						</TextInfo>
						}

						{data.publisher &&
						<TextInfo >
							<Text style={{fontWeight: 'bold'}}>Publicado por: </Text>
							{data.publisher?.join(', ')}
						</TextInfo>
						}

						{data.first_publish_year &&
						<TextInfo>
							<Text style={{fontWeight: 'bold'}}>Ano da primeira publicação: </Text>
							{data.first_publish_year}
						</TextInfo>
						}

						{data.subject &&
						<TextInfo >
							<Text style={{fontWeight: 'bold'}}>Gênero: </Text>
							{data.subject?.join(', ')}
						</TextInfo>
						}

						{data.isbn &&
						<TextInfo >
							<Text style={{fontWeight: 'bold'}}>Isbn 10: </Text>
							{data.isbn?.join(', ')}
						</TextInfo>
						}

						{data.language &&
            <TextInfo>
            	<Text style={{fontWeight: 'bold'}}>Idioma: </Text>
            	{data.language?.join(', ')}
            </TextInfo>
						}



					</ViewTextInfo>
				</ScrollView>
			</MainContainer>

		</Modal>
	);
}
