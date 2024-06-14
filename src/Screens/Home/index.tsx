import { ActivityIndicator, BackHandler, FlatList,  Image,  RefreshControl,  Text, View } from 'react-native';
import { BookButton, BookTextInfo, ButtonChangeTypes, CloseButton, MainContainer, SubmitButton, TextButton, ViewConsulta, ViewInput, ViewTypes } from './styles';
import { api } from '../../utils/api';
import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import ModalBookInfo from '../../components/ModalBookInfo';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Doc } from '../../@types/Doc';
import { RootStackParamList } from '../../@types/RootStackParamList';


export default function Home() {
	const [searchData, setSearchData] = useState('');
	const [type, setType] = useState<'title' | 'subject' | 'author'>('title');
	const [consulta, setConsulta] = useState<Doc[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedBook, setSelectedBook] = useState<Doc>(Object);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();

	useEffect(() => {
		BackHandler.addEventListener('hardwareBackPress', () => {
			navigation.reset({
				index: 0,
				routes: [{ name: 'Login' }],
			});
			return true;
		});
	}, []);


	function handlePressSubmitButton() {
		console.log(searchData, type);
		if (searchData.length > 0 && type.length > 0) {

			setIsLoading(true);

			api.get(`search.json?${type}=${searchData}`)
				.then(response => {
					const data = response.data.docs;
					setConsulta(data);
				})
				.catch(error => console.log(error))
				.finally(() => {
					setIsLoading(false);
				});
		}
	}

	function handlePressButtonTypes(type: 'title' | 'subject' | 'author') {
		setType(type);
		setConsulta([]);
		setSearchData('');
	}
	function handlePressBookButton(data: Doc) {
		setIsModalVisible(true);
		setSelectedBook(data);
	}



	function renderItem({ item }: { item: Doc }) {

		return (
			<BookButton onPress={() => handlePressBookButton(item)} key={item.key}>
				{item.cover_i ? (
					<Image
						source={{
							uri: `https://covers.openlibrary.org/b/id/${item.cover_i}.jpg`,
							width: 100,
							height: 150,
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
				<View style={{flex: 1}}>
					<Text  style={{ color: '#eeeeee', fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>

					{item.author_name && <BookTextInfo numberOfLines={2}>de: {item.author_name.join(', ')}</BookTextInfo>}
					{item.publisher && <BookTextInfo numberOfLines={2}>editado por: {item.publisher.join(', ')}</BookTextInfo>}
					{item.ratings_average && <BookTextInfo numberOfLines={2}>Nota: {item.ratings_average.toFixed(1)} / 5</BookTextInfo>}
					{
						item.ratings_count && <BookTextInfo >{item.ratings_count} avaliações</BookTextInfo>
					}

				</View>

			</BookButton>
		);
	}

	return (
		<>
			<ModalBookInfo
				onClose={() => setIsModalVisible(false)}
				data={selectedBook}
				isModalVisible={isModalVisible}
			/>
			<MainContainer>

				<CloseButton onPress={() =>
				{
					navigation.reset({
						index: 0,
						routes: [{ name: 'Login' }],
					});
				}
				}>
					<MaterialIcons name="logout" size={24} color="black" />
				</CloseButton>


				<ViewConsulta>

					<Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>
          Selecione como deseja buscar seu livro:
					</Text>
					<ViewTypes>
						<ButtonChangeTypes onPress={() => handlePressButtonTypes('title')} color={type === 'title'}>
							<TextButton color={type === 'title'}>Nome</TextButton>
						</ButtonChangeTypes>
						<ButtonChangeTypes onPress={() => handlePressButtonTypes('subject')} color={type === 'subject'}>
							<TextButton color={type === 'subject'}>Gênero</TextButton>
						</ButtonChangeTypes>
						<ButtonChangeTypes onPress={() => handlePressButtonTypes('author')} color={type === 'author'}>
							<TextButton color={type === 'author'}>Autor</TextButton>
						</ButtonChangeTypes>
					</ViewTypes>
					<ViewInput>
						<Input value={searchData} onChangeText={(data) => setSearchData(data)} title='' label='Digite aqui...' />
						<SubmitButton onPress={() => handlePressSubmitButton()}>
							<Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Enviar</Text>
						</SubmitButton>
					</ViewInput>

					{!isLoading &&
					<FlatList
						data={consulta}
						keyExtractor={(item) => item.key}
						renderItem={renderItem}
						contentContainerStyle={{gap: 10}}
						initialNumToRender={5}
						maxToRenderPerBatch={5}
						refreshControl=
							{
								<RefreshControl
									refreshing={isLoading}
									onRefresh={handlePressSubmitButton}
								/>
							}
					/>
					}
					{isLoading &&
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}><ActivityIndicator size='large' color='#fff'/>
          </View>
					}
				</ViewConsulta>
			</MainContainer>
		</>

	);
}
