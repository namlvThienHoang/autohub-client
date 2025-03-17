import Sidebar from "@/components/sidebar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Car, DollarSign, Heart, ShoppingCart } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 md:pl-64">
        <div className="p-4 md:p-6">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to your AutoHub dashboard</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Cars Viewed</CardTitle>
                <Car className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">+5 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wishlist Items</CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cart Items</CardTitle>
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">No change from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$89,990</div>
                <p className="text-xs text-muted-foreground">+$89,990 from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="col-span-4">
                    <CardHeader>
                      <CardTitle>Browsing History</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">Tesla Model S</p>
                            <p className="text-xs text-muted-foreground">Viewed 2 hours ago</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">BMW 5 Series</p>
                            <p className="text-xs text-muted-foreground">Viewed 5 hours ago</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium">Porsche 911</p>
                            <p className="text-xs text-muted-foreground">Viewed yesterday</p>
                          </div>
                          <Button variant="ghost" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Popular Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Electric</span>
                              <span className="text-sm text-muted-foreground">40%</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                              <div className="bg-primary h-full rounded-full" style={{ width: "40%" }} />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">SUV</span>
                              <span className="text-sm text-muted-foreground">30%</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                              <div className="bg-primary h-full rounded-full" style={{ width: "30%" }} />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="w-full">
                            <div className="flex justify-between mb-1">
                              <span className="text-sm">Sports</span>
                              <span className="text-sm text-muted-foreground">20%</span>
                            </div>
                            <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                              <div className="bg-primary h-full rounded-full" style={{ width: "20%" }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="recent" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <div className="mr-4 rounded-full bg-primary/10 p-2">
                          <Heart className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Added Tesla Model S to wishlist</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4 rounded-full bg-primary/10 p-2">
                          <ShoppingCart className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Added BMW 5 Series to cart</p>
                          <p className="text-xs text-muted-foreground">5 hours ago</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="mr-4 rounded-full bg-primary/10 p-2">
                          <Car className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Viewed Porsche 911</p>
                          <p className="text-xs text-muted-foreground">Yesterday</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="recommendations" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended for You</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="rounded-lg border overflow-hidden">
                        <div className="relative h-40 bg-muted">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Car className="h-10 w-10 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="font-medium">Audi e-tron GT</div>
                          <div className="text-sm text-muted-foreground">Electric • 2023</div>
                          <div className="mt-2 font-bold">$99,990</div>
                          <Button className="mt-4 w-full" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg border overflow-hidden">
                        <div className="relative h-40 bg-muted">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Car className="h-10 w-10 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="font-medium">Mercedes-Benz GLE</div>
                          <div className="text-sm text-muted-foreground">SUV • 2023</div>
                          <div className="mt-2 font-bold">$64,990</div>
                          <Button className="mt-4 w-full" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                      <div className="rounded-lg border overflow-hidden">
                        <div className="relative h-40 bg-muted">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Car className="h-10 w-10 text-muted-foreground" />
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="font-medium">Range Rover Sport</div>
                          <div className="text-sm text-muted-foreground">SUV • 2023</div>
                          <div className="mt-2 font-bold">$79,990</div>
                          <Button className="mt-4 w-full" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

