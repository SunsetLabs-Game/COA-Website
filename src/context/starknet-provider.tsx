"use client"

import type React from "react"
import { InjectedConnector } from "starknetkit/injected"
import { mainnet, sepolia } from "@starknet-react/chains"
import { StarknetConfig, publicProvider } from "@starknet-react/core"

interface StarknetProviderProps {
  children: React.ReactNode
}

export default function StarknetProvider({ children }: StarknetProviderProps) {
  const chains = [mainnet, sepolia]
  const connectors = [
    new InjectedConnector({ options: { id: "argentX", name: "Argent X" } }),
    new InjectedConnector({ options: { id: "braavos", name: "Braavos" } })
  ]

  return (
    <StarknetConfig chains={chains} provider={publicProvider()} connectors={connectors}>
      {children}
    </StarknetConfig>
  )
}