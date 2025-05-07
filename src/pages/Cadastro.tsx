import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Link } from "react-router-dom"

export function Cadastro() {
    return (
        <div className="flex h-screen">

            <div
                className="w-1/2 bg-cover bg-center"
                style={{ backgroundImage: "url('/carro_tela_login.png')" }}
            />

            <div className="w-1/2 flex items-center justify-center p-8 bg-white">
                <Tabs defaultValue="mecanico" className="w-full max-w-md">
                    <TabsList className="grid w-full grid-cols-2 mb-4">
                        <TabsTrigger value="mecanico">Mecânico</TabsTrigger>
                        <TabsTrigger value="distribuidor">Distribuidor</TabsTrigger>
                    </TabsList>

                    <TabsContent value="mecanico">
                        <Card>
                            <CardHeader>
                                <CardTitle>Cadastrar - Mecânico</CardTitle>
                                <CardDescription>Preencha seus dados para criar a conta.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                                <div className="space-y-2">
                                    <Label htmlFor="email-m">Email</Label>
                                    <Input id="email-m" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="senha-m">Senha</Label>
                                    <Input id="senha-m" type="password" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirma-m">Confirmar Senha</Label>
                                    <Input id="confirma-m" type="password" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="endereco-m">Endereço</Label>
                                    <Input id="endereco-m" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cep-m">CEP</Label>
                                    <Input id="cep-m" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cidade-m">Cidade</Label>
                                    <Input id="cidade-m" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="estado-m">Estado</Label>
                                    <Input id="estado-m" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="sexo-m">Sexo</Label>
                                    <Input id="sexo-m" placeholder="Masculino / Feminino / Outro" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cpf-m">CPF</Label>
                                    <Input id="cpf-m" />
                                </div>
                            </CardContent>

                            <CardFooter className="flex w-full gap-4">
                                <Link to="/auto/produtos" className="">
                                    <Button className="flex-1 bg-red-950 hover:bg-red-700 text-white">
                                        Cadastrar
                                    </Button>
                                </Link>
                                <Link to="/" className="">
                                    <Button variant="outline" className="w-full">
                                        Voltar
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    <TabsContent value="distribuidor">
                        <Card>
                            <CardHeader>
                                <CardTitle>Cadastrar - Distribuidor</CardTitle>
                                <CardDescription>Preencha seus dados para criar a conta.</CardDescription>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                                <div className="space-y-2">
                                    <Label htmlFor="email-m">Email</Label>
                                    <Input id="email-m" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="senha-m">Senha</Label>
                                    <Input id="senha-m" type="password" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="confirma-m">Confirmar Senha</Label>
                                    <Input id="confirma-m" type="password" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="endereco-m">Endereço</Label>
                                    <Input id="endereco-m" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cep-m">CEP</Label>
                                    <Input id="cep-m" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cidade-m">Cidade</Label>
                                    <Input id="cidade-m" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="estado-m">Estado</Label>
                                    <Input id="estado-m" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="cnpj-m">CNPJ</Label>
                                    <Input id="cnpj-m" />
                                </div>
                            </CardContent>
                            <CardFooter className="flex w-full gap-4">
                                <Link to="/auto/home" className="">
                                    <Button className="flex-1 bg-red-950 hover:bg-red-700 text-white">
                                        Cadastrar
                                    </Button>
                                </Link>
                                <Link to="/" className="">
                                    <Button variant="outline" className="w-full">
                                        Voltar
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                </Tabs>
            </div>
        </div>
    )
}
