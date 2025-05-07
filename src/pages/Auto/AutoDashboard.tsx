import { columns } from '../../components/columns'
import { DataTable } from '../../components/data-table'
import { dashboardValues, chartValues } from '../../components/data/dashboard-values'
import { DashboardChart } from '../../components/dashboardChart'
import { DashboardPie } from '../../components/dashboardPie'

export function AutoDashboard() {
    return (
        <div className="p-6 space-y-6">
            <h1 className="text-2xl font-bold mb-6 text-red-950">Painel de Compras</h1>

            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Tabela */}
                <div className=" flex flex-col items-center justify-center bg-gray-100 border shadow-xl rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Últimas Compras</h2>
                    <DataTable columns={columns} data={dashboardValues} />
                </div>

                {/* Gráfico */}
                <div className="flex flex-col items-center justify-center bg-gray-100 border shadow-xl rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Vendas por Mês</h2>
                    <DashboardChart data={chartValues} />
                </div>

                <div className="bg-gray-100 border shadow-xl rounded-lg p-4">
                    <h2 className="text-lg font-semibold mb-2">Distribuição por Status</h2>
                    <DashboardPie data={dashboardValues} />
                </div>


            </div>
        </div>
    )
}
