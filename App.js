import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
    Cadastro, ConfigLiga, Form_User, LigaCreate, Load, Load3x3, Load5x5, Login, 
    MainP, MainL, Teste, NovoJg, Ranking, List_Jgs, View_Jg3, View_Jg5, 
    Membros, ViewP, Subst_Img, Subst_ImgLg
} from "./src/front-end/screens/index_screens";


export default function App(){
    const Stack = createNativeStackNavigator();
   
    
        return(
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName    =   "Load"
                    screenOptions       =   {{
                        headerBackVisible   :   false,
                        headerShown         :   false,
                    }}
                >
                    <Stack.Screen
                        name        = "Cadastro"
                        component   = {Cadastro}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "Subst_Img"
                        component   = {Subst_Img}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "Subst_ImgLg"
                        component   = {Subst_ImgLg}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "ConfigLiga"
                        component   = {ConfigLiga}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "Form_User"
                        component   = {Form_User}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "LigaCreate"
                        component   = {LigaCreate}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "Load"
                        component   = {Load}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "Load3x3"
                        component   = {Load3x3}
                        options     = {{orientation : 'landscape'}}
                    />
                    <Stack.Screen
                        name        = "Load5x5"
                        component   = {Load5x5}
                        options     = {{orientation : 'landscape'}}
                    />
                    <Stack.Screen
                        name        = "Login"
                        component   = {Login}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "List_Jgs"
                        component   = {List_Jgs}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "ViewJG3"
                        component   = {View_Jg3}
                        options     = {{orientation : 'landscape'}}
                    />
                    <Stack.Screen
                        name        = "ViewJG5"
                        component   = {View_Jg5}
                        options     = {{orientation : 'landscape'}}
                    />
                    <Stack.Screen
                        name        = "ViewP"
                        component   = {ViewP}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "MainP"
                        component   = {MainP}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "MainL"
                        component   = {MainL}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "NovoJg"
                        component   = {NovoJg}
                        options     = {{orientation : 'portrait'}}
                    />
                    <Stack.Screen
                        name        = "Ranking"
                        component   = {Ranking}
                        options     = {{orientation :  'landscape'}}
                    />
                    <Stack.Screen
                        name        = "Membros"
                        component   = {Membros}
                        options     = {{orientation :  'portrait'}}
                    />
                    <Stack.Screen
                        name        = "Teste"
                        component   = {Teste}
                        options     = {{orientation : 'portrait'}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );   
}
